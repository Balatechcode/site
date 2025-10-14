"use server"

import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { revalidatePath } from "next/cache"

// In a real application, you would use a proper database
// This is a simplified example using file storage
export async function submitJobApplication(formData: FormData) {
  try {
    const jobId = formData.get("jobId") as string
    const jobTitle = formData.get("jobTitle") as string
    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const linkedin = formData.get("linkedin") as string
    const portfolio = formData.get("portfolio") as string
    const coverLetter = formData.get("coverLetter") as string
    const resume = formData.get("resume") as File
    const additionalDocs = formData.getAll("additionalDocs") as File[]

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), "uploads", "applications")
    await mkdir(uploadsDir, { recursive: true })

    // Generate unique application ID
    const applicationId = `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const applicationDir = join(uploadsDir, applicationId)
    await mkdir(applicationDir, { recursive: true })

    // Save resume file
    let resumePath = ""
    if (resume && resume.size > 0) {
      const resumeBuffer = Buffer.from(await resume.arrayBuffer())
      const resumeFileName = `resume_${resume.name}`
      resumePath = join(applicationDir, resumeFileName)
      await writeFile(resumePath, resumeBuffer)
    }

    // Save additional documents
    const additionalDocsPaths: string[] = []
    for (const doc of additionalDocs) {
      if (doc && doc.size > 0) {
        const docBuffer = Buffer.from(await doc.arrayBuffer())
        const docFileName = `additional_${doc.name}`
        const docPath = join(applicationDir, docFileName)
        await writeFile(docPath, docBuffer)
        additionalDocsPaths.push(docPath)
      }
    }

    // Create application data object
    const applicationData = {
      id: applicationId,
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      linkedin,
      portfolio,
      coverLetter,
      resumePath,
      additionalDocsPaths,
      submittedAt: new Date().toISOString(),
      status: "pending",
    }

    // Save application data to JSON file (in a real app, save to database)
    const dataPath = join(applicationDir, "application.json")
    await writeFile(dataPath, JSON.stringify(applicationData, null, 2))

    // In a real application, you would:
    // 1. Save to a proper database (PostgreSQL, MongoDB, etc.)
    // 2. Send confirmation email to applicant
    // 3. Notify HR team
    // 4. Store files in cloud storage (AWS S3, Cloudinary, etc.)

    revalidatePath("/careers")

    return { success: true, applicationId }
  } catch (error) {
    console.error("Error submitting application:", error)
    return { success: false, error: "Failed to submit application" }
  }
}
