for (const link of document.querySelectorAll('.link-box')) {
    link.setAttribute('target', '_blank');

    const linkLogo = document.createElement('img');
    linkLogo.alt = 'Site logo';
    link.insertAdjacentElement('afterbegin', linkLogo);

    const domain = new URL(link.getAttribute('href')).hostname;

    try {
        linkLogo.src = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
    } catch {
        linkLogo.src = `https://${domain}/favicon.ico`
    }
}