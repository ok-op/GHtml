    // Replace with your Hugging Face API token
    const HF_API_TOKEN = "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";
    let generatedImageUrl = null;

    async function generateImage() {
      const prompt = document.getElementById("promptInput").value;
      const model = document.getElementById("modelSelect").value;
      const outputDiv = document.getElementById("output");
      const previewButton = document.getElementById("previewButton");
      const downloadButton = document.getElementById("downloadButton");

      if (!prompt) {
        alert("Please enter a prompt!");
        return;
      }

      outputDiv.innerHTML = "<p>Generating image... Please wait.</p>";
      previewButton.style.display = "none";
      downloadButton.style.display = "none";

      try {
        const response = await fetch(
          `https://api-inference.huggingface.co/models/${model}`,
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${HF_API_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: prompt }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to generate image.");
        }

        const blob = await response.blob();
        generatedImageUrl = URL.createObjectURL(blob);
        outputDiv.innerHTML = `<img src="${generatedImageUrl}" alt="Generated Image">`;
        previewButton.style.display = "inline-block";
        downloadButton.style.display = "inline-block";
      } catch (error) {
        console.error(error);
        outputDiv.innerHTML = "<p>Error generating image. Please try again.</p>";
      }
    }

    function previewImage() {
      const modal = document.getElementById("previewModal");
      const modalImage = document.getElementById("modalImage");
      modalImage.src = generatedImageUrl;
      modal.style.display = "flex";
    }

    function closeModal() {
      const modal = document.getElementById("previewModal");
      modal.style.display = "none";
    }

    function downloadImage() {
      if (!generatedImageUrl) {
        alert("No image to download!");
        return;
      }
      const link = document.createElement("a");
      link.href = generatedImageUrl;
      link.download = "generated-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
