import React from 'react';
import BlogArticle from '../../components/BlogArticle';
import PharmaScanArchitecture from "../../assets/PharmascanArchitecture.png";
import TeamPhoto from "../../assets/TeamPhoto.jpg";
import PharmascanPills from "../../assets/PharmascanPills.png";
import SetupPhoto from "../../assets/SetupPhoto.png";

const PharmaScan = () => {
    const blogData = {
        title: "PharmaScan: Irvine Hacks 2025",
        author: "Ethan Santos",
        date: "January 28, 2025",
        content: [
            {
                type: 'text',
                value: "PharmaScan was inspired by challenges we saw firsthand in the pharmacy industry. A family member who works as a pharmacist often talked about how time-consuming and error-prone pill identification could be. We wanted to create a tool to make this process more efficient and less stressful."
            },
            {
                type: 'subheader',
                value: "What is PharmaScan?"
            },
            {
                type: 'text',
                value: "PharmaScan is a smart tool for identifying and managing medications, designed to streamline pharmacy workflows. Using YOLOv8 for image recognition and ChatGPT-4o, it identifies pills based on shape, color, and size. This helps pharmacists save time and ensures medications are processed accurately."
            },
            {
                type: 'subheader',
                value: "How We Came Up With The Idea"
            },
            {
                type: 'text',
                value: "The idea for PharmaScan came from conversations with one of my team mate's aunt, who often described the challenges of identifying pills manually. Watching her rely on physical features alone sparked the idea of combining AI and automation to make her job easier and more accurate."
            },
            {
                type: 'subheader',
                value: "Overview of How We Built It"
            },
            {
                type: 'text',
                value: "PharmaScan was developed at IrvineHacks 2025 with my teammates Benson Manzano, Arvin Limjoco, and Dommenick Lacuata. Over the course of 12 intense hours, we coded and built the prototype. Our focus was on creating a tool that could directly address the needs of pharmacists in real-world scenarios."
            },
            {
                type: 'image',
                src: TeamPhoto,
                alt: "Our team photo at IrvineHacks 2025."
            },
            {
                type: 'subheader',
                value: "Information Architecture"
            },
            {
                type: 'image',
                src: PharmaScanArchitecture,
                alt: "Diagram showing the architecture of PharmaScan."
            },
            {
                type: 'text',
                value: "PharmaScan's architecture is designed to efficiently handle pill identification and management. The frontend, built with React, handles pill parsing, login/sign-up, and a pill database. It communicates with the backend server, which processes requests using Flask. Authentication is managed through Firebase, while pill data is stored in Supabase. Images of pills are uploaded to AWS S3, which are then analyzed using a dual AI system consisting of GPT-4o for textual analysis and YOLOv8 for computer vision. The AI models are trained using pill identification datasets to ensure accuracy."
            },
            {
                type: 'subheader',
                value: "Technical Implementation"
            },
            {
                type: 'text',
                value: "The backend uses Flask for handling API requests, integrated with AWS S3 for image storage and Supabase for managing pill data. The YOLOv8 model processes the pill images, and ChatGPT-4o assists in analyzing and validating pill information. Here’s an example of the API endpoint I built for uploading pill data:"
            },
            {
                type: 'code',
                language: 'python',
                value: `@app.route("/api/upload", methods=["POST"])
def upload_pill():
    try:
        # Retrieve form data from the POST request
        name = request.form.get("name")  # Pill name
        file = request.files.get("image")  # Uploaded image file
        description = request.form.get("description")  # Pill description

        # Check if all required fields are provided
        if not name or not file or not description:
            return jsonify({"error": "Missing name, image or description"}), 400

        # Secure the uploaded file name
        filename = secure_filename(file.filename)

        # Upload the file to AWS S3 bucket
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            filename,
            ExtraArgs={"ContentType": file.content_type},
        )

        # Construct the file URL from the S3 bucket
        file_url = f"https://{BUCKET_NAME}.s3.us-west-1.amazonaws.com/{filename}"

        # Prepare the payload for saving pill info to Supabase
        payload = {
            "name": name,  # Name of the pill
            "image_url": file_url,  # URL of the uploaded image
            "description": description,  # Description of the pill
        }

        # Send a POST request to Supabase to save pill information
        supabase_response = requests.post(
            f"{SUPABASE_URL}/rest/v1/{SUPABASE_TABLE}",
            headers=supabase_headers,  # Authentication headers for Supabase
            json=payload,  # Payload data
        )

        # Check if the response from Supabase indicates success
        if supabase_response.status_code != 201:
            return jsonify({"error": "Failed to save pill info to Supabase"}), 500

        # Return a success message with the file URL
        return jsonify({"message": "Pill uploaded successfully", "image_url": file_url}), 200

    except Exception as e:
        # Handle any unexpected errors and return the error message
        return jsonify({"error": str(e)}), 500`},
            {
                type: 'subheader',
                value: "Challenges We Faced"
            },
            {
                type: 'text',
                value: "One of the biggest challenges was finding a reliable dataset for pill identification. Due to time constraints, we ended up using a public dataset on pills to train the model instead of manually verifying data. Balancing the model’s performance within the limited time we had during the hackathon was another hurdle, but we managed to deliver a functional prototype."
            },
            {
                type: 'subheader',
                value: "Accomplishments"
            },
            {
                type: 'text',
                value: "We’re proud that we built a prototype that works and provides real value. PharmaScan doesn’t just solve a problem—it enhances workflow efficiency and reduces stress for pharmacists. The positive feedback from judges and other participants was a bonus."
            },
            {
                type: 'image',
                src: PharmascanPills,
                alt: "Screenshot of the YOLOv8 model training."
            },
            {
                type: 'subheader',
                value: "Our Hackathon Setup"
            },
            {
                type: 'image',
                src: SetupPhoto,
                alt: "Photo of our workspace during IrvineHacks 2025."
            },
            {
                type: 'subheader',
                value: "What’s Next for PharmaScan?"
            },
            {
                type: 'text',
                value: "We want to take PharmaScan further by developing a custom AI model specifically trained for pill identification. On the frontend, we’d like to improve the user interface with smoother animations using Framer Motion. We’re also considering submitting it to another hackathon to gather more feedback and explore its full potential."
            }
        ]
    };

    return (
        <div>
            <BlogArticle
                title={blogData.title}
                author={blogData.author}
                date={blogData.date}
                content={blogData.content}
            />
        </div>
    );
};

export default PharmaScan;
