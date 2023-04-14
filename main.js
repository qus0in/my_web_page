$(document).ready(function () {
    // 사용자의 답변을 저장할 배열을 만듭니다.
    const userAnswers = [];

    // 답변 버튼이 클릭되었을 때의 동작을 정의합니다.
    $(".answer-btn").click(function () {
        // 사용자의 답변을 배열에 저장합니다.
        const answer = $(this).data("answer");
        userAnswers.push(answer);

        // 다음 질문을 보여줍니다.
        showNextQuestion();
    });

    // 다음 질문을 보여주는 함수를 정의합니다.
    function showNextQuestion() {
        // 사용자의 답변이 있는 질문의 개수를 구합니다.
        const answeredQuestions = $(".answer-btn[data-answer]").length;
        // 다음 질문의 번호를 계산합니다.
        const nextQuestionIndex = answeredQuestions;

        // 모든 질문에 대한 답변이 있으면 결과를 보여줍니다.
        if (nextQuestionIndex >= 5) {
            showResult();
            return;
        }

        // 다음 질문을 보여줍니다.
        const $currentSection = $("section").eq(nextQuestionIndex);
        $currentSection.show();

        // 현재 질문을 숨깁니다.
        const $previousSection = $currentSection.prev("section");
        $previousSection.hide();
    }

    // 결과를 보여주는 함수를 정의합니다.
    function showResult() {
        // 사용자의 답변을 합쳐서 MBTI 유형 코드를 만듭니다.
        const mbtiCode = userAnswers.join("");

        // MBTI 유형 코드에 해당하는 설명을 가져옵니다.
        const mbtiDescription = getDescription(mbtiCode);

        // 결과를 보여줍니다.
        $(".result-text").text(`당신의 MBTI 유형은 ${mbtiCode}입니다. ${mbtiDescription}`);
        $(".result-section").show();
    }

    // MBTI 유형 코드에 해당하는 설명을 반환하는 함수를 정의합니다.
    function getDescription(code) {
        switch (code) {
            case "ISTJ":
                return "청렴결백한 논리주의자입니다.";
            case "ISFJ":
                return "용감하고 성실한 수호자입니다.";
            case "INFJ":
                return "선의의 옹호자이자 비전을 제시하는 사람입니다.";
            case "INTJ":
                return "전략적이고 독창적인 비전을 가진 사람입니다.";
            case "ISTP":
                return "만능 재주가 있으며 관심이 있는 분야에 대해 깊이 파고드는 사람입니다.";
            case "ISFP":
                return "자신만의 독특한 가치관과 예술적 감수성을 가진 사람입니다.";
            case "INFP":
                return "이상주의자이자 자신과 타인의 성장을 꿈꾸는 사람입니다.";
            case "INTP":
                return "논리적이고 분석적이며 창의력이 뛰어난 사람입니다.";
            case "ESTP":
                return "현재에 더 중점을 둔 삶을 살아가는 사람입니다.";
            case "ESFP":
                return "즐거움과 변화를 추구하며 주변과 함께하는 것을 좋아하는 사람입니다.";
            case "ENFP":
                return "열정적이며 창의적인 취향을 가진 사람입니다.";
            case "ENTP":
                return "논리적인 사고와 창의성이 동시에 있는 사람입니다.";
            case "ESTJ":
                return "사실적이며 현실적인 문제 해결 능력이 뛰어난 사람입니다.";
            case "ESFJ":
                return "사교성이 높고 다른 사람들을 돕는 것을 좋아하는 사람입니다.";
            case "ENFJ":
                return "타인을 잘 돕고 리더십이 뛰어난 사람입니다.";
            case "ENTJ":
                return "논리적이고 분석적인 능력을 가진 리더입니다.";
            default:
                return "알 수 없는 유형입니다.";
        }
    }
});