const amountInput = document.getElementById('amount');
const out = document.getElementById('out');
const calc_button = document.getElementById('calc');
const send_button = document.getElementById('send');
const result_input = document.getElementById(`result`)

function change(amount) {
    let rem = amount;
    const c500 = Math.floor(rem / 500);
    rem -= c500 * 500;

    const c100 = Math.floor(rem / 100);
    rem -= c100 * 100;

    const c10 = Math.floor(rem / 10);
    rem -= c10 * 10;

    const c2 = Math.floor(rem / 2);
    rem -= c2 * 2;

    let result = `Результат: ${c500} × 500, ${c100} × 100, ${c10} × 10, ${c2} × 2 (всего ${Number(amount - rem)} руб.)`
    
    if (rem !== 0) {
        result += '<br>Невозможно разменять точнее (остаток: ' + rem + ')';
    }

    return result;
}

calc_button.addEventListener('click', () => {
    const raw = amountInput.value;
    const n = Number(raw);
    const result = change(n);

    out.innerHTML = result;
    result_input.value = result;
});
