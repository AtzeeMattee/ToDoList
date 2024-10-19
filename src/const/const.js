const activityStatus = {
  open:'open',
  deleted:'deleted',
}

const userStatus = {
  pending: 'pending',
  active: 'active',
}

const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'
'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\n'+
'-----END RSA PRIVATE KEY-----';

const publicKey = '-----BEGIN PUBLIC KEY-----\n'+
'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvrwn42KfKLzU8VEKp+RJ\n'+
'MQNx3Ljtyu8V4yi93Z8MHaoV+OTs3zSIRsI3pErVf4PrqqSCgYvo3IDesmZNuVNB\n'+
'In6JCuVSno4fJUsRnW6vX0itfxqHwp5zl4NVIIrwDfAF1JB23uaiI1TVB0Bgc7x/\n'+
'BWEg21BFn/rsDeinJxP/QI1wn/Yb2KyCjdvgmhLUphJ24cFxpOSHqQOvA9xVxXRr\n'+
'buFGFMUMVEcxKi1qXAeQYuma1wsUAV2jCWH0D56sb6W5D58+gb+IT6xsHa/pYM77\n'+
'WYGQ6V0AjCvQ+zhE2Jf72vCk0/78OPR1HxNd8KJs7OhsagyzC3hjtF6Y1u3g+TG+\n'+
'w73Fz7rZOx/U7+S8/YuCM4LiCmGA781Cd6E4ZF9FNMLoGHpy2oYZUfg5HNXcAgDu\n'+
'WNtzYjgkM+qhMAc/q4MvkhP2oSJ62rByweV0gXsuT9KatBylbOKS+7lia/I3N7/q\n'+
'Dit4gkcYyZY8QbHxdDM1IRrgRQU2MZxbNRlzc06k+zvIYP9FGm3TlLgZS8S0ApjX\n'+
'kBUVHpDbnHB9tou66pzXYewonDwyQJ912VcCp4AEeZbL+YTtWFTr3P7U0p+x3cn6\n'+
'TjG2yUSDW1Hx6jEObIV6lQ82f/cJApWo0t5RtKuE65lD4krji6EhxQjU+pf/bbaE\n'+
'IY+f/5T4S2E3h4NrHWQEm70CAwEAAQ==\n'
'-----END PUBLIC KEY-----';

const mailConfig = {
  senderAddress: 'atzee.matte@gmail.com',
  smtpPassword: '*******',
  subject: 'todolist registration',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  html: '',

}

export {
  activityStatus,
  userStatus,
  privateKey,
  publicKey,
  mailConfig,
}