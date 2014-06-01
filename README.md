web-form-validator
==================

Jqeury based web form validator which makes form validation as simple as calling a function!!!!!


Instructions:
=============
1)requires jquery

2)currently only required & email validations are supported. Other validations can be implemented as simply as adding a new function!!!


Example:
========

Web form:
========

&lt;input type='text' id='txtTest' name='txtTest' /&gt;

&lt;input type='text' id='txtTest2' name='txtTest2' /&gt;

&lt;input type='button' id='btnTest' value="Validate"&gt;

Script:
=======



    $('#btnTest').click(function () {
        var fmFields = {
            txtTest: {
                required: {
                    instruction: '',
                    message: 'txtTest is required'
                },
                email: {
                    instruction: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
                    message: 'txtTest has invalid email'
                }
            },
            txtTest2: {
                required: {
                    validate: true,
                    message: 'txtTest2 is required'
                }
            }
        };

        ValidateForm(fmFields);

    });
    
