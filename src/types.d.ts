export interface ContactToSend {
  name: string,
  phone: string,
  email: string,
  photo: string
}

export interface ContactsFromApi {
  [id: string]: ContactToSend
}

export interface ContactsWithId extends ContactToSend {
  id: string
}