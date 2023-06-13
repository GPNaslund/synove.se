const InstagramLink = (username: string): string => {
  let href: string; 
  if (typeof window !== 'undefined' && window.navigator && window.navigator.canShare()) {
    href = `instagram://user?username=${username}`;
  } else {
    href = `https://www.instagram.com/${username}`;
  }
  return href;
}

export default InstagramLink;