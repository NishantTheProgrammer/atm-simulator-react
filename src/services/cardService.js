export const downloadCard = async payload => {
    const content = btoa(JSON.stringify(payload));
    const a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    a.setAttribute('download', payload.name + '-debit.card');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export const readCardData = file => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (ev) => {
            resolve(JSON.parse(atob(ev.target.result)));
        }
        reader.onerror = e => reject(e);
    })
}