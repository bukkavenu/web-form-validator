function FieldFunctions() {
    var fieldUpdated = false;
    this.required = required;
    this.email = email;

    function required(fieldName, field) {
        return function () {
            if ($('#' + fieldName).val() === '') {
                if (!fieldUpdated) {
                    ShowError(fieldName, field.message);
                }
            }
        };
    }

    function email(fieldName, field) {
        return function () {
            var regEx = new RegExp(field.instruction);
            if (!$('#' + fieldName).val().match(regEx)) {
                if (!fieldUpdated) {
                    ShowError(fieldName, field.message);
                }
            }
        };
    }

    function ShowError(fieldName, fieldMessage) {
        $('#' + fieldName).next($('<span>' + fieldMessage + '</span>')).remove();
        $('<span>' + fieldMessage + '</span>').insertAfter($('#' + fieldName)).css('color', 'red').show();
        fieldUpdated = true;
    }
}

function ValidateForm(fmFields) {
    forEach(fmFields, function (fieldName, field) {
        Validate(fieldName, field)();
    });

    function forEach(fmFields, action) {
        for (var field in fmFields) {
            action(field, fmFields[field]);
        }
    }

    function Validate(fieldName, field) {
        var fieldFunctions = new FieldFunctions();
        return function () {
            forEach(field, function (attrName, attr) {
                fieldFunctions[attrName](fieldName, attr)();
            });
        };
    }
}
