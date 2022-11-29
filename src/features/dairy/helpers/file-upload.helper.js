export async function fileUpload(file) {
  if (!file) throw new Error("File is empty");

  const cloudBucket = import.meta.env.VITE_CLOUD_BUCKET;
  const formData = new FormData();

  formData.append("upload_preset", "dairy-app");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudBucket, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error('File can"t be upload');
    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
}
