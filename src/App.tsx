import "./App.css";
import { Happyemoji, User } from "iconsax-react";

function App() {
  return (
    <>
      <User size="32" color="#ff8a65" variant="Bulk" />
      <Happyemoji size="32" color="#ff8a65" variant="Bulk" />
      <h1 className="text-3xl font-bold text-cyan-500 underline">Typography</h1>
      <hr className="my-4" />
      <section className="grid gap-2">
        <h1>h1. Heading</h1>
        <h2>h2. Heading</h2>
        <h3>h3. Heading</h3>
        <h4>h4. Heading</h4>
        <h5>h5. Heading</h5>
        <h6>h6. Heading</h6>

        <div className="subtitle">
          subtitle. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </div>

        <div className="body">
          body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </div>

        <button className="btn-primary justify-self-center">Primary</button>
        <button className="btn-outline justify-self-center">Outline</button>
        <button className=" justify-self-center">Outline</button>
        <input className=" justify-self-center" />
        <div>
          <small>caption text</small>
        </div>
        <div className=".overline">OVERLINE TEXT</div>
      </section>
    </>
  );
}

export default App;
