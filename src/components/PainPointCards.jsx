export default function PainPointCards() {
  const cards = [
    {
      id: "card-1",
      title: "Real Time Tracking",
      description: "Track our bus in real-time and never miss a ride",
      button: "Get started",
      bgImage:
        "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-[#34BE82] hover:bg-[#2da873] text-white",
    },
    {
      id: "card-2",
      title: "Inconvenient Scheduling",
      description:
        "Plan your journey with easy-to-use schedule and receive timely notifications",
      button: "Join the waitlist",
      bgImage:
        "https://images.unsplash.com/photo-1683313107043-283d0319a11e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-[#34BE82] hover:bg-[#2da873] text-white",
    },
    {
      id: "card-3",
      title: "Smart Routing",
      description:
        "AI-powered route optimization for smooth and efficient journeys",
      button: "Download Our App",
      bgImage:
        "https://images.unsplash.com/photo-1587400873582-230980eb46eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black",
    },
    {
      id: "card-4",
      title: "Convenient Scheduling",
      description:
        "Plan your journey with easy-to-use schedule and receive timely notifications.",
      button: "Download Our App",
      bgImage:
        "https://images.unsplash.com/photo-1600783245563-16114264a2c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[Euclid-Circular-B]">
      <div className="w-full max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-xl text-white h-[400px] group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              <div className="relative z-20 p-8 h-full flex flex-col">
                <div className="mb-auto">
                  <h2 className="text-4xl font-bold mb-4">{card.title}</h2>
                  <p className="text-gray-300 text-lg">{card.description}</p>
                </div>
                <div className="mb-4">
                  <button
                    className={`${card.buttonColor} font-medium py-3 px-6 rounded-md`}
                  >
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
