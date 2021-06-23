import TableItem from './tableItem';

export default function ResultsTable({ items, pageObject }) {
  if (Array.isArray(items) && items.length > 0) {
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
