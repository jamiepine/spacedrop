const faq = [
  {
    q: `Can I change the keybind?`,
    a: `Absolutely, you can set your preferred keybind from CTRL + Space to whatever you want in the settings.`
  },
  {
    q: `Do I need to make an account?`,
    a: `Nope, just download the app and you'll be able to use it as a free user.`
  },
  {
    q: `Can I send files to people without the app?`,
    a: `At this time, no. However! We will be building out a web only version that will allow guests to receive files from you. You can send an email or text message with a link that will start the transfer to them.`
  },
  {
    q: `How is this different to AirDrop?`,
    a: `Airdrop works only on Apple devices physically nearby—Spacedrop works on all platforms and sends data securely anywhere in the world. It's also much faster to hit CTRL+Space and drop than it is to: *right click* > Share > AirDrop > *select recipient*. The convenience of Spacedrop is unmatched.`
  },
  {
    q: `How fast are transfer speeds?`,
    a: `About as fast as your internet connection can handle, we have a network of servers worldwide that find the fastest path to stream data between clients.`
  },
  {
    q: `What is the Signal Protocol?`,
    a: `The Signal Protocol is a cryptographic protocol created by the Signal Foundation, used by Whatsapp, Telegram, Messenger and of course Signal itself. It's widely considered the most secure end-to-end encryption protocol.
    
    \n\b We use Signal to encrypt chunks of data on the client, each chunk is encrypted as an individual message with its own unique keys—destroyed immediately after decryption.`
  },
  {
    q: `What personal data do you store?`,
    a: `You can see exactly what data we store on our privacy page. TLDR; your email (optional), phone number (optional), IP address, the amount of bandwidth you've used and some basic usage statistics. We do not store file data or meta data, and we do not keep record of individual file transfers on our servers.`
  },
  {
    q: `How do I add contacts?`,
    a: `You can invite people to add you by using your personalized invite URL: spacedrop.co/add/YOUR_USERNAME. If they don't have Spacedrop already, we'll prompt them to download it.`
  },
  {
    q: `I want to delete my account`,
    a: `That's easy, you can do that from the app settings or at spacedrop.co/account. Your personal data will be erased within 30 days no questions asked.`
  },
  {
    q: `Is the app easy to uninstall?`,
    a: `Of course, and we don't cry about it with annoying popups either—just drag the app to your trash or use any app removal tool. We know theres nothing worse than an app that refuses to go away.`
  },
  {
    q: `What will the mobile app do?`,
    a: `You'll be notified of incoming transfers; you could accept them right on your phone or even another device remotely. You'll of course also be able to initiate transfers via the native share UI and in-app. We'll begin working on it once desktop is fully stable!`
  }
];

export default faq;
