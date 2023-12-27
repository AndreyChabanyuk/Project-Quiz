// Запрос на json-server расположенный на glitch.me для хранения заявок

async function submitFormData(formData){
        const queryString = `https://able-developing-lathe.glitch.me/data`
                await fetch(queryString,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(formData),
                })
    
}

export {submitFormData}