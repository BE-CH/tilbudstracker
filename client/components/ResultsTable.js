import TableItem from './tableItem';

export default function ResultsTable({ items }) {
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
          <TableItem key={item.id} itemObject={item}></TableItem>
        ))}
      </tbody>
    </table>
  );
}
