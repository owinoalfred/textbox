// Defining an interface for our articles
// Each article will have an id, a title, an excerpt (a short description), and a date
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

// Creating a list of articles featuring African stories, folklore, and sports moments
export const articles: Article[] = [
  {
    id: 1,
    title: "The Legend of Mwindo: A Hero's Journey",
    excerpt: "Mwindo, the child born walking and speaking, embarks on an extraordinary journey to reclaim his rightful place in the kingdom of the Nyanga people.",
    date: "Feb 05, 2025"
  },
  {
    id: 2,
    title: "The Rise of Ugandan Football: From Local Pitches to International Glory",
    excerpt: "A look at Uganda's journey in football, from humble beginnings to making a mark in the Africa Cup of Nations and beyond.",
    date: "Jan 22, 2025"
  },
  {
    id: 3,
    title: "Nelson Mandela and the 1995 Rugby World Cup: A Symbol of Unity",
    excerpt: "How Nelson Mandela used the Rugby World Cup to bridge racial divides and unite South Africa under one banner of hope and sportsmanship.",
    date: "Dec 18, 2024"
  },
  {
    id: 4,
    title: "The Clever Hare and the Cunning Hyena: An African Folktale",
    excerpt: "A classic tale of wit and wisdom as the clever hare outsmarts the greedy hyena in a battle of wits.",
    date: "Nov 10, 2024"
  },
  {
    id: 5,
    title: "Eliud Kipchoge: The Marathon King of Kenya",
    excerpt: "How Eliud Kipchoge became the first man to run a marathon in under two hours, redefining human endurance and breaking barriers.",
    date: "Oct 12, 2024"
  }
];
