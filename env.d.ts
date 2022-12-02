declare module "sweetalert2/dist/sweetalert2";

type CellType =
  "surprise" |
  "bed" |
  "car-koit" |
  "death" |
  "female-condom" |
  "koit-toilet" |
  "koit" |
  "male-condom" |
  "nothing-interesting" |
  "trash" |
  "dick" |
  "treatment" |
  "kitten";

interface UselessEvent {
  title: string;
  content: string;
}

interface Question {
  text: string;
  answerA: string;
  answerB: string;
  answerC?: string;
  goodAnswer: "A" | "B" | "C";
  explanation?: string;
}

interface Message {
  content: string;
  date: import('firebase/firestore').Timestamp;
  userTag: string;
}

interface AuthContextValue {
  loading: boolean;
  user: import("firebase/auth").User | null;
}