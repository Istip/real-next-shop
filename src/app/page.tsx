export default function Home() {
  return (
    <main>
      <MyComponent />
    </main>
  );
}

const MyComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Shop</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
        Click Me
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Font Weights</h2>
        <p className="font-thin">Thin</p>
        <p className="font-light">Light</p>
        <p className="font-normal">Normal</p>
        <p className="font-medium">Medium</p>
        <p className="font-semibold">Semi-Bold</p>
        <p className="font-bold">Bold</p>
        <p className="font-extrabold">Extra-Bold</p>
        <p className="font-black">Black</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Headings</h2>
        <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
        <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
        <h3 className="text-2xl font-bold mb-2">Heading 3</h3>
        <h4 className="text-xl font-bold mb-2">Heading 4</h4>
        <h5 className="text-lg font-bold mb-2">Heading 5</h5>
        <h6 className="text-base font-bold mb-2">Heading 6</h6>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">
          Tag 1
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">
          Tag 2
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">
          Tag 3
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">
          Tag 4
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">
          Tag 5
        </span>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Card Component</h2>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Button</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Grid</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">Item 1</div>
          <div className="bg-white p-4 shadow-md">Item 2</div>
          <div className="bg-white p-4 shadow-md">Item 3</div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Flex</h2>
        <div className="flex">
          <div className="bg-white p-4 shadow-md mr-4">Item 1</div>
          <div className="bg-white p-4 shadow-md mr-4">Item 2</div>
          <div className="bg-white p-4 shadow-md">Item 3</div>
        </div>
      </div>
    </div>
  );
};
