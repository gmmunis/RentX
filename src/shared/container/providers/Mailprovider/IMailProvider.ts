interface IMailProvider {
    sendmail(to: string, subject: string, body: string): Promise<void>;
}

export { IMailProvider };