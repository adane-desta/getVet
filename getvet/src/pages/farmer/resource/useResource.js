

function useResource(){

    const Resources = [
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Canine+Health",
          type: "Research",
          title: "Guide to Canine Influenza Prevention",
          description:
            "A comprehensive resource on preventing and managing canine flu outbreaks in kennels and shelters.",
          created_at: "2026-01-25",
          actual_resource_url: "https://example.com/resources/canine-flu-guide"
        },
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Livestock",
          type: "Livestock",
          title: "Digital Herd Monitoring Handbook",
          description:
            "Step-by-step manual for using smart sensors to track dairy cow health and detect mastitis early.",
          created_at: "2026-01-22",
          actual_resource_url: "https://example.com/resources/digital-herd-monitoring"
        },
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Wildlife",
          type: "Wildlife",
          title: "Parasite Management in Elephant Sanctuaries",
          description:
            "Educational resource on reducing parasite infections among rescued elephants through improved feeding programs.",
          created_at: "2026-01-20",
          actual_resource_url: "https://example.com/resources/elephant-parasite-management"
        },
        {
          image_url: "https://via.placeholder.com/300x200.png?text=Pets",
          type: "Pets",
          title: "Nutrition and Longevity in Domestic Cats",
          description:
            "Research summary linking balanced diets with omega-3s to longer lifespans in cats.",
          created_at: "2026-01-18",
          actual_resource_url: "https://example.com/resources/cat-nutrition-longevity"
        }
      ];

      return Resources;
    
}

export default useResource;