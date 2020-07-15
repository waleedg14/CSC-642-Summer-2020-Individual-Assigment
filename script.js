var elRequired = $('.required');
var varcad = [];

function required(el) {
	var id = el.attr('id');
	if (el.val() == '') {
		printErrorMsg(el, id + ' is required.');
		return true;
	} else {
		varcad.push(el);
		return false;
	}
}

function printErrorMsg(el, msg) {
	var msg = `<small class="invalid-feedback">${msg}</small>`;
	var label = el.prev();
	elRequired.parents('.form-validate').append(msg);
	label.addClass('text-danger');
	el.addClass('is-invalid');
} 

function clearErrorMsg() {
	console.log(varcad)
}

$('#form').on('submit', function(e) {
	e.preventDefault();
	if (!required(elRequired)) {
		clearErrorMsg();
	}
});