import TableItem from './tableItem';
import Fuse from 'fuse.js';

export default function ResultsTable({ items, pageObject }) {
  if (Array.isArray(items) && items.length > 0) {
    const originalItems = [...items];
    const fuse = new Fuse(originalItems, {
      includeScore: true,
      keys: [
        { name: 'name', weight: 3 },
        { name: 'description', weight: 1 },
      ],
    });

    if (pageObject.search) {
      const resultOfSearch = fuse.search(pageObject.search);
      items = [];
      resultOfSearch.forEach((element) => {
        if (element.score < 0.75) {
          items.push(element.item);
        }
      });
    }

    if (!pageObject.search || pageObject.search === '') {
      if (pageObject.sorting === 'procentage_change') {
        items.sort((a, b) => {
          return b.pricing.procentage_change - a.pricing.procentage_change;
        });
      }

      if (pageObject.sorting === 'cheapest') {
        items.sort((a, b) => {
          return a.pricing.price - b.pricing.price;
        });
      }

      if (pageObject.sorting === 'expensivest') {
        items.sort((a, b) => {
          return b.pricing.price - a.pricing.price;
        });
      }
    }

    if (items.length < pageObject.amountprpage) {
      pageObject.page = 0;
    }

    const startAmount = Math.round(parseInt(pageObject.page) * parseInt(pageObject.amountprpage));
    const endAmount = Math.round(
      parseInt(pageObject.page) * parseInt(pageObject.amountprpage) + parseInt(pageObject.amountprpage)
    );

    items = items.slice(startAmount, endAmount);

    return (
      <table>
        <thead>
          <tr>
            <th>Billede</th>
            <th>Produkt</th>
            <th>Mærke</th>
            <th>Pris</th>
            <th>Normalpris</th>
            <th>Besparelse</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableItem key={item.itemID} itemObject={item}></TableItem>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <p>Ingen tilbud fundet...</p>
        <style jsx>{`
          p {
            color: black;
            font-size: 30px;
          }
        `}</style>
      </div>
    );
  }
}
