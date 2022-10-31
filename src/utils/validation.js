import validator from 'validator';

export const isFill = (form) => {
    return new Promise((resolve, reject) => {
        let countFieds = 0;

        for (const input of Object.values(form)) {
            if (validator.isEmpty(input)) {
                reject('Please , Fill in all required fields');
            } else {
                countFieds += 1;
            }

            if (countFieds == Object.values(form).length) {
                resolve();
            }
        }
    });
};
