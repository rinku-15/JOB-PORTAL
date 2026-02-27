import express from "express";
import { isAuth } from "../middlewares/auth.js";
import uploadFile from "../middlewares/multer.js";
import { createCompany,createJob,updateJob,getSingleJob, deleteCompany,getAllCompany,getCompanyDetails,getAllActiveJobs,getAllApplicationForJob,updateApplication } from "../controllers/job.js";


const router = express.Router();
router.post("/company/new", isAuth, uploadFile, createCompany);
router.delete("/company/:companyId", isAuth, deleteCompany);
router.post("/new", isAuth, createJob);
router.put("/:jobId", updateJob);
router.get("/company/all", isAuth, getAllCompany);
router.get("/company/:id", getCompanyDetails);
router.get("/all", getAllActiveJobs);
router.get("/:jobId", getSingleJob);
router.get("/application/:jobId", getAllApplicationForJob);
router.put("/application/update/:id", isAuth, updateApplication);



export default router;