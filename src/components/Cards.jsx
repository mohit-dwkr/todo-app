function Cards() {
  const cards = [
    {
      name: "GitHub",
      url: "https://github.com/mohit-dwkr",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohit-d-a83472367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/192uYwzvzd/",
    },
  ]

  return (
    <div className="max-w-[90%] mx-auto my-10">
      <h2 className="flex justify-center rounded-2xl text-white bg-violet-800 text-2xl font-bold mb-6 py-2">
        Connect with Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-800 hover:bg-violet-950 hover:scale-105 transition-all duration-300 text-white rounded-xl p-6 shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{card.name}</h3>
            <p className="text-sm mt-2">Visit my {card.name} profile</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Cards
