import React from 'react';

const Clientsay = () => {
  return (
    <div>
      <section className="text-gray-600 body-font w-full bg-black py-12">
        <div className="text-center mb-12">
          <h2
            style={{
              color: "orange",
              fontWeight: "bold",
              fontSize: "1.1em",
              fontFamily: "cursive",
            }}
          >
            Testimonials
          </h2>
          <h1 style={{ color: "white", fontSize: "2em", fontWeight: "bold" }}>
            What our clients are saying
          </h1>
        </div>

        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {/* Feedback Cards */}
          {[
            {
              name: "Alamin Hasan",
              title: "Food Specialist",
              feedback:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magnam fugit quos eum veniam vel ipsam commodi omnis voluptatibus numquam aut illo corporis, necessitatibus ratione esse velit cumque sint minus?",
            },
            {
              name: "Nayel Sheikh",
              title: "Food Blogger",
              feedback:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magnam fugit quos eum veniam vel ipsam commodi omnis voluptatibus numquam aut illo corporis, necessitatibus ratione esse velit cumque sint minus?",
            },
            {
              name: "Zubaida Asfand",
              title: "Food Analysts",
              feedback:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magnam fugit quos eum veniam vel ipsam commodi omnis voluptatibus numquam aut illo corporis, necessitatibus ratione esse velit cumque sint minus?",
            },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-lg shadow-lg p-6 w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h1
                style={{ color: "orange", fontSize: "1.2em", fontWeight: "bold" }}
              >
                Client: {index + 1}
              </h1>
              <p className="leading-relaxed text-lg my-4 text-gray-700">
                <strong className="text-orange-500 text-lg">&quot;</strong>
                {client.feedback}
                <strong className="text-orange-500 text-lg">&quot;</strong>
              </p>
              <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                {client.name}
              </h2>
              <p className="text-gray-500">{client.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clientsay;
