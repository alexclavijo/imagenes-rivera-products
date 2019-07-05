using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ImagenesRivera.Products.Data.Repository
{
    public interface IGlobalRepository<E> where E : class
    {
        IQueryable<E> Entity { get; }

        IEnumerable<E> Find(Func<E, bool> condition);

        E FindById(object id);

        E Insert(E entity, int userId);

        void Update(E entity, int userId);

        void Delete(object id);

        void SoftDelete(object id, int userId);
    }
}
