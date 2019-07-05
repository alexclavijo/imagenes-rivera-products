using HtmlAgilityPack;
using System.Collections.Generic;
using System.Linq;

namespace ImagenesRivera.Products.Host.Core
{
    public static class DOMHtmlElementTypes {
        public const string Script = "script";
        public const string Meta = "meta";
        public const string Style = "style";
        public const string Link = "link";
    }

    public class DOMHtmlElementsResolver
    {
        private readonly HtmlDocument _document;

        public DOMHtmlElementsResolver(string htmlFilePath) {
            _document = new HtmlDocument();
            _document.Load(htmlFilePath);
        }

        public List<string> GetHtmlElements(string elementType, string path = null)
        {
            return ResolveElements(elementType, path);
        }

        private List<string> ResolveElements(string elementType, string path)
        {
            string XPath = $"//{elementType}";
            var elements = new List<string>();
            var nodes = _document.DocumentNode.SelectNodes(XPath);
            if (nodes != null && nodes.Count > 0) {

                string attrToUpdate = GetAttributeForUpdate(elementType);

                if (path == null || attrToUpdate == null)
                    elements = nodes.Select(node => node.OuterHtml).ToList();

                else
                {
                    elements = nodes.Select(node => {
                        UpdateNodeAttributeIfNeeded(node, attrToUpdate, path);
                        return node.OuterHtml;
                    }).ToList();
                }
            }
            return elements;
        }

        private void UpdateNodeAttributeIfNeeded(HtmlNode node, string attribute, string path)
        {
            if (node.Attributes[attribute] != null)
            {
                string nodeAttrValue = node.Attributes[attribute].Value;
                if (!nodeAttrValue.Contains("http://") && !nodeAttrValue.Contains("https://")) {
                    node.Attributes[attribute].Value = $"{path}/{nodeAttrValue}";
                } 
            } 
        }

        private string GetAttributeForUpdate(string elementType) {
            switch (elementType) {

                case DOMHtmlElementTypes.Script:
                    return "src";
               
                case DOMHtmlElementTypes.Link:
                    return "href";
            }

            return null;
        }
    }
}
