

function useNewsEvent(){


    const dummyNewsEvent = [
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Animal+Health",
          type: "Research",
          title: "New Vaccine Developed for Canine Flu",
          description: "Veterinary scientists announce a breakthrough vaccine that reduces symptoms of canine influenza by 80%.",
          date: "2026-01-25"
        },
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Livestock",
          type: "Livestock",
          title: "Digital Monitoring Boosts Dairy Cow Health",
          description: "Smart sensors track cow activity and detect early signs of mastitis, improving herd wellbeing.",
          date: "2026-01-22"
        },
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Wildlife",
          type: "Wildlife",
          title: "Elephant Sanctuary Reports Decline in Parasite Infections",
          description: "A new feeding program has reduced parasite-related illnesses among rescued elephants by 40%.",
          date: "2026-01-20"
        },
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Pets",
          type: "Pets",
          title: "Study Links Cat Nutrition to Longer Lifespan",
          description: "Researchers find that balanced diets with omega-3s extend domestic cats’ average lifespan by two years.",
          date: "2026-01-18"
        }
      ];

      return dummyNewsEvent;

}

export default useNewsEvent;