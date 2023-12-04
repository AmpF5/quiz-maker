export interface Question {
    id?: string;
    content: string;
    answers: Answer[];
}

export interface Answer {
    content: string;
    isCorrect: boolean;
    isSelected?: boolean;
}

export const testQuestions: Question[] = [
  {
    content: '1Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque.',
    answers: [
      { content: 'test 1 to test 1', isCorrect: false },
      { content: 'test 2 to test 1', isCorrect: false },
      { content: 'test 3 to test 1', isCorrect: true },
      { content: 'test 4 to test 1', isCorrect: false },
    ],
  },
  {
    content: '2Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque.',
    answers: [
      { content: 'test 1 to test 2', isCorrect: true },
      { content: 'test 2 to test 2', isCorrect: false },
      { content: 'test 3 to test 2', isCorrect: false },
      { content: 'test 4 to test 2', isCorrect: false },
    ],
  },
  {
    content: '3Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque.',
    answers: [
      { content: 'test 1 to test 3', isCorrect: false },
      { content: 'test 2 to test 3', isCorrect: false },
      { content: 'test 3 to test 3', isCorrect: false },
      { content: 'test 4 to test 3', isCorrect: true },
    ],
  },
  // {
  //   content: '4Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque. Illum magnam ducimus occaecati. Totam sit quae explicabo qui dolor dolorem corporis rem. Nihil quia repellat esse omnis quos quia. Ipsa sint dicta possimus iusto quo iste quasi. Odit corporis quasi iure itaque.',
  //   answers: [
  //     { content: 'test 1 to test 4', isCorrect: false },
  //     { content: 'test 2 to test 4', isCorrect: true },
  //     { content: 'test 3 to test 4', isCorrect: false },
  //     { content: 'test 4 to test 4', isCorrect: false },
  //   ],
  // },
  
];
