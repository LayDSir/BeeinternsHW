let logins = ['beeline', 'beeinterns', 'bee'];

function validate(data) {
    const { login, password, confirmPassword, license, gender, firstName } = data;

    for(let i = 0; i < logins.length; i++) {
        if(login == logins[i]) {
            alert('Ваш логин уже занят, выберите другой');
            return;
        }
    };

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (login == '' || login == ' ') {
        alert('Необходимо заполнить логин');
    } else {
        let end;
        if(gender === 'male') {
            end = 'ый';
        } else {
            end = 'ая';
        }
        alert(`Уважаем${end} ${firstName}, заявка создана`);
    }
}
