export interface Question {
    id: number;
    content: string;
    answers: Answer[];
}

export interface Answer {
    id: number;
    content: string;
    isCorrect: boolean;
}

export const testQuestions: Question[] = [
  {
    id: 1,
    content: 'Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque.',
    answers: [
      { id: 1, content: 'test 1 to test 1', isCorrect: false },
      { id: 2, content: 'test 2 to test 1', isCorrect: false },
      { id: 3, content: 'test 3 to test 1', isCorrect: true },
      { id: 4, content: 'test 4 to test 1', isCorrect: false },
    ],
  },
  {
    id: 2,
    content: 'Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque.',
    answers: [
      { id: 1, content: 'test 1 to test 2', isCorrect: true },
      { id: 2, content: 'test 2 to test 2', isCorrect: false },
      { id: 3, content: 'test 3 to test 2', isCorrect: false },
      { id: 4, content: 'test 4 to test 2', isCorrect: false },
    ],
  },
  {
    id: 1,
    content: 'Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque.',
    answers: [
      { id: 1, content: 'test 1 to test 3', isCorrect: false },
      { id: 2, content: 'test 2 to test 3', isCorrect: false },
      { id: 3, content: 'test 3 to test 3', isCorrect: false },
      { id: 4, content: 'test 4 to test 3', isCorrect: true },
    ],
  },
];
