import Card from "../../atoms/Card";


/**
 * Skills Section
 * @returns {JSX.Element}
 */
export default function Skills() {
  return (
    <section>
      <h1>Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end py-24">
        <Card>
          <h2>HTML</h2>
          <p>90%</p>
        </Card>
        <Card>
          <h2>HTML</h2>
          <p>90%</p>
        </Card>
        <Card>
          <h2>HTML</h2>
          <p>90%</p>
        </Card>
        <Card>
          <h2>HTML</h2>
          <p>90%</p>
        </Card>
      </div>
    </section>
  );
}
