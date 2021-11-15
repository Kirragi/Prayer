export function validationEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  if (email.trim() !== '' && re.test(email)) {
    return { errorExists: false, errorText: '' };
  } else {
    return { errorExists: true, errorText: "Email can't be empty" };
  }
}

export const validationName = (name: string) => {
  if (name.trim() !== '') {
    return { errorExists: false, errorText: '' };
  } else {
    return { errorExists: true, errorText: "Name can't be empty" };
  }
};

export function validationPass(pass: string) {
  if (pass.trim() !== '') {
    if (pass.length >= 6) {
      return { errorExists: false, errorText: '' };
    } else {
      return { errorExists: true, errorText: 'Min 6 characters' };
    }
  } else {
    return { errorExists: true, errorText: "Password can't be empty" };
  }
}
