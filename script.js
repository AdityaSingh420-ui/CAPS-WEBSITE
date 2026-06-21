const questions = [

"In a difficult spot, I turn at once to what can be done to put things right.",
"I influence where I can rather than worrying about what I can't influence.",
"I don't take criticism personally.",
"I generally manage to keep things in perspective.",
"I am calm in a crisis.",
"I'm good at finding solutions to problems.",
"I wouldn't describe myself as an anxious person.",
"I don't tend to avoid conflict.",
"I try to control events rather than being a victim of circumstances.",
"I trust my intuition.",
"I manage my stress levels well.",
"I feel confident and secure in my position."

];

const container = document.getElementById("questions");

questions.forEach((q, index) => {

    const div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
        <label>${index + 1}. ${q}</label>

        <select id="q${index}" required>
            <option value="">Select an Answer</option>
            <option value="1">1 - Strongly Disagree</option>
            <option value="2">2 - Disagree</option>
            <option value="3">3 - Neutral</option>
            <option value="4">4 - Agree</option>
            <option value="5">5 - Strongly Agree</option>
        </select>
    `;

    container.appendChild(div);
});

document.getElementById("assessmentForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    let answers = [];
    let total = 0;

    for(let i = 0; i < questions.length; i++) {

        const value = document.getElementById(`q${i}`).value;

        if(value === "") {
            alert("Please answer all questions.");
            return;
        }

        answers.push(Number(value));
        total += Number(value);
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("result").innerHTML =
        `<h2>Your Resilience Score: ${total}/60</h2>`;

    const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbwBC04b0H_58EI1L1zYD_UjHryY3FZ88KWBbh5RmZAaDSq3RQ3QV3AWwUIHURCzQ7YRYA/exec";

    try {

        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                answers: answers,
                total: total
            })
        });

        const result = await response.text();

        console.log(result);

        alert("Assessment submitted successfully!");

    } catch(error) {

        console.error(error);

        alert("Submission failed. Check Apps Script URL.");
    }
});exec