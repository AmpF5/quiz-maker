import PyPDF2
import re

def extract_questions_answers(pdf_path):
    questions = []
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        text = ''

        for page_num in range(1):
            page = pdf_reader.pages[page_num]
            text += page.extract_text();

    pattern = re.compile(r'\d+\.(.*?)(A\..*?)(?=\d+\.|$)', re.DOTALL)
    matches = pattern.findall(text)

    questions_answers = []
    for match in matches:
        question = match[0].strip()
        answers = [{'answer': ans.strip(), 'isCorrect': 'false'} for ans in match[1].strip().split('\n')]

        questions_answers.append({'question': question, 'answers': answers})

    return questions_answers

def save_question_to_txt():
    return

if __name__ == "__main__":
    pdf_path = 'BAZA-1.pdf'
    questions_answers = extract_questions_answers(pdf_path)

    for qa in questions_answers:
        print("{")
        print("\"Question\":", '"' , qa['question'], '"', ',')
        print("\"Answers\":")
        print('[')
        for answer in qa['answers']:
            print('{')
            print(f"\"Content\":", '"', answer['answer'], '"', ',' ,"\"IsCorrect\":", answer['isCorrect'],)
            print('},')
        print(']')
        print("},")
        


        
        