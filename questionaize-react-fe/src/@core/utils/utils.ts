import { downloadAsync } from './http-client';

export const emailRegex =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/i;

const download = async (url?: string, fileName?: string) => {
  if (!url) return;

  let name = fileName;
  if (!name) name = url.split('/')[url.split('/').length - 1];

  const res = await downloadAsync(url);
  const newUrl = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement('a');
  link.href = newUrl;
  link.setAttribute('download', name || ''); //or any other extension
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const newGuid = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

export const Utils = {
	download,
	newGuid
}
