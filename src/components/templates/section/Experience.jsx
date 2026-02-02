import Card from "../../atoms/Card";


/**
 * Skills Section
 * @returns {JSX.Element}
 */
export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end py-24">
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
