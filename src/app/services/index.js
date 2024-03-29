export async function addData(currentTab, formData){
    try {
        const response = await fetch(`http://localhost:3000/api/${currentTab}/add`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        return result;

    } catch (error) {
        console.log(error)
    }
}

export async function getData(currentTab){
    try {
        const response = await fetch(`http://localhost:3000/api/${currentTab}/get`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function updateData(currentTab, formData){
    try {
        const response = await fetch(`http://localhost:3000/api/${currentTab}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}


export async function login(formData){
    try {
        const response = await fetch(`http://localhost:3000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}