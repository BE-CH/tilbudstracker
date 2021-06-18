import TableItem from './tableItem';

export default function ResultsTable({ items }) {
  if (Array.isArray(items) && items.length > 0) {
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
