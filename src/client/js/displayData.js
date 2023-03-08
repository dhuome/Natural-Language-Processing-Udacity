export function display(data) {

	const subjectivity = document.getElementById('subjectivity');
	const confidence = document.getElementById('confidence');
	const irony = document.getElementById('irony');
	const scoreTag = document.getElementById('score_tag');

	if (!validateData(data)) {
		alert('no results');
		return
	}

	subjectivity.textContent = 'Subjectivity: ' + data.subjectivity;
	confidence.textContent = 'Confidence: ' + data.confidence;
	irony.textContent = 'Irony: ' + data.irony;
	scoreTag.textContent = 'Score Tag: ' + data.score_tag;
}

export function validateData(data) {
	if (!data.subjectivity || !data.confidence || !data.irony || !data.score_tag) {
		return false;
	}
	return true;
}