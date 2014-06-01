function FieldFunctions() {
    var fieldUpdated = false;
    this.required = required;
    this.email = email;

    function required(fieldName, field) {
        if ($('#' + fieldName).val() === '') {
            if (!fieldUpdated) {
                $('#' + fieldName).next($('<span>' + field.message + '</span>')).remove();

                $('<span>' + field.message + '</span>').insertAfter($('#' + fieldName)).css('color', 'red').show();
                fieldUpdated = true;
            }
        }
    }

    function email(fieldName, field) {
        var regEx = new RegExp(field.instruction);
        if (!$('#' + fieldName).val().match(regEx)) {
            if (!fieldUpdated) {
                $('#' + fieldName).next($('<span>' + field.message + '</span>')).remove();
                $('<span>' + field.message + '</span>').insertAfter($('#' + fieldName)).css('color', 'red').show();
                fieldUpdated = true;
            }
        }
    }
}

function ValidateForm(fmFields) {
    forEach(fmFields, function (fieldName, field) {
        Validate(fieldName, field)();
    });

    function Validate(fieldName, field) {
        var fieldFunctions = new FieldFunctions();
        return function () {
            forEach(field, function (attrName, attr) {
                fieldFunctions[attrName](fieldName, attr);
            });
        };
    }

    function forEach(fmFields, action) {
        for (var field in fmFields) {
            action(field, fmFields[field]);
        }
    }
}