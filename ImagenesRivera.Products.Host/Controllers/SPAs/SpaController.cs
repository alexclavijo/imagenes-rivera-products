using ImagenesRivera.Products.Core;
using Microsoft.AspNetCore.Mvc;

namespace ImagenesRivera.Products.Host.Controllers.SPAs
{
    public abstract class SpaController : Controller
    {
        protected abstract string SpaName { get; }
        protected abstract void AddAppSettings();
        protected abstract void AddLoggedInUser();

        public virtual IActionResult Index()
        {
            return RedirectToRoute(SpaName);
        }

        public virtual IActionResult RenderSpa() {

            string indexHtmlPath = $"wwwroot/{SpaName}/index.html";

            AddPageResources(indexHtmlPath);
            AddAppSettings();
            AddLoggedInUser();

            return View(SpaName);
        }

        protected virtual void AddPageResources(string indexHtmlPath)
        {
            var resolver = new DOMHtmlElementsResolver(indexHtmlPath);
            ViewBag.Metas = resolver.GetHtmlElements(DOMHtmlElementTypes.Meta);
            ViewBag.Styles = resolver.GetHtmlElements(DOMHtmlElementTypes.Style);
            ViewBag.Links = resolver.GetHtmlElements(DOMHtmlElementTypes.Link);
            ViewBag.Scripts = resolver.GetHtmlElements(DOMHtmlElementTypes.Script);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
