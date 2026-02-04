import Card from "../../atoms/Card";

/**
 * Skills Section
 * @returns {JSX.Element}
 */
export default function Skills() {
  return (
    <section>
      <div className="flex flex-col items-center py-24 bg-slate-900">
        <h1 className="text-3xl text-slate-50 font-bold">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center p-12 w-full">
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
      </div>
    </section>
  );
}
