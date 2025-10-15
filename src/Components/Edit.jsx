import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { getResumeAPI, updateResumeAPI } from "../service/allAPI";
import Swal from "sweetalert2";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  maxHeight: "90vh",
};

function Edit({ resumeID,setUserInput }) {
  const [inputSkill, setInputSkill] = useState("");
  const [editUserInput, setEditUserInput] = useState({
    id: "",
    professionalData: {
      name: "",
      jobtitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      jobrole: "",
      company: "",
      joblocation: "",
      duration: "",
    },
    skill: [],
    summary: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    getAResume();
  };
  const handleClose = () => setOpen(false);
  const skillsSuggestionArray = [
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "JAVASCRIP",
    "TAILWIND",
    "REACT",
    "FIGMA",
    "ANGULAR",
    "MONGODB",
  ];

  console.log(resumeID);

  const getAResume = async () => {
    const result = await getResumeAPI(resumeID);
    console.log(result);
    setEditUserInput(result.data);
  };
  console.log(editUserInput);

  // useEffect(()=>{
  //   getAResume()
  // },[handleOpen])

  const addSkill = (inputSkill) => {
    console.log("user Input skill :" + inputSkill);
    if (inputSkill) {
      if (editUserInput.skill.includes(inputSkill)) {
        alert("Given SKill already exist add another");
      } else {
        setEditUserInput({ ...editUserInput, skill: [...editUserInput.skill, inputSkill] });
      }
    }
  };

  const removeSkill = (skill) => {
    // console.log(skill);
    setEditUserInput({
      ...editUserInput,
      skill: editUserInput.skill.filter((item) => item != skill),
    });
  };

  const updateResume = async () => {
    try {
      const result = await updateResumeAPI(resumeID, editUserInput);
      console.log(result);
      if (result.status === 200) {
        setUserInput(result.data)

        Swal.fire({
          title: "Success!",
          text: "Resume Updated Successfully!",
          icon: "success",
          confirmButtonText: 'Back',
        });

        handleClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error in Updating Resume!",
          confirmButtonText: 'Back',
        });
      }
    } catch (error) {
       Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error in Updating Resume!",
          confirmButtonText: 'Back',
        });
    }
  };

  return (
    <>
      <button onClick={handleOpen} className="btn btn-primary">
        <FaRegEdit />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Resume
          </Typography>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h1>Personal Details</h1>
              <div className="row p-3">
                <TextField
                  value={editUserInput.professionalData.name}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        name: e.target.value,
                      },
                    })
                  }
                  id="Full-Name"
                  label="Full-Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.jobtitle}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        jobtitle: e.target.value,
                      },
                    })
                  }
                  id="Job-Title"
                  label="Job-Title"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.location}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        location: e.target.value,
                      },
                    })
                  }
                  id="Location"
                  label="Location"
                  variant="standard"
                />
              </div>
            </div>
            <div>
              <h1>Contact Details</h1>
              <div className="row p-3">
                <TextField
                  value={editUserInput.professionalData.email}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        email: e.target.value,
                      },
                    })
                  }
                  id="email"
                  label="E-Mail"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.phone}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        phone: e.target.value,
                      },
                    })
                  }
                  id="phone-number"
                  label="Phone Number"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.github}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        github: e.target.value,
                      },
                    })
                  }
                  id="gitHub"
                  label="GitHub Profile Link"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.linkedin}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        linkedin: e.target.value,
                      },
                    })
                  }
                  id="linkedIn"
                  label="LinkedIn Profile Link"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.professionalData.portfolio}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      professionalData: {
                        ...editUserInput.professionalData,
                        portfolio: e.target.value,
                      },
                    })
                  }
                  id="portfolio"
                  label="Portfolio Profile Link"
                  variant="standard"
                />
              </div>
            </div>

            <div>
              <h1>Educational Details</h1>
              <div className="row p-3">
                <TextField
                  value={editUserInput.educationData.course}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        course: e.target.value,
                      },
                    })
                  }
                  id="Course-Name"
                  label="Course-Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.educationData.college}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        college: e.target.value,
                      },
                    })
                  }
                  id="College-Name"
                  label="College-Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.educationData.university}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        university: e.target.value,
                      },
                    })
                  }
                  id="University"
                  label="University"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.educationData.year}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      educationData: {
                        ...editUserInput.educationData,
                        year: e.target.value,
                      },
                    })
                  }
                  id="Passout"
                  label="Year Of Passout"
                  variant="standard"
                />
              </div>
            </div>

            <div>
              <h1>Professional Details</h1>
              <div className="row p-3">
                <TextField
                  value={editUserInput.experience.jobrole}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        jobrole: e.target.value,
                      },
                    })
                  }
                  id="JobInternship"
                  label="Job or Internship"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.experience.company}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        company: e.target.value,
                      },
                    })
                  }
                  id="Company-Name"
                  label="Company-Name"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.experience.joblocation}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        joblocation: e.target.value,
                      },
                    })
                  }
                  id="Location"
                  label="Location"
                  variant="standard"
                />
                <TextField
                  value={editUserInput.experience.duration}
                  onChange={(e) =>
                    setEditUserInput({
                      ...editUserInput,
                      experience: {
                        ...editUserInput.experience,
                        duration: e.target.value,
                      },
                    })
                  }
                  id="Duration"
                  label="Duration"
                  variant="standard"
                />
              </div>
            </div>
            <div>
              <h1>Skills</h1>
              <div className="row p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <TextField
                    value={inputSkill}
                    onChange={(e) => setInputSkill(e.target.value)}
                    sx={{ width: "550px" }}
                    id="enterskills"
                    label="Enter Skills"
                    variant="standard"
                  />
                  <Button
                    onClick={() => addSkill(inputSkill)}
                    variant="outlined"
                  >
                    ADD
                  </Button>
                </div>
                <div className="mt-4">
                  <h4>Suggestions</h4>
                  <div className="d-flex gap-2 flex-wrap mt-3">
                    {skillsSuggestionArray.map((userskill) => (
                      <Button
                        onClick={() => addSkill(userskill)}
                        key={userskill}
                        variant="contained"
                      >
                        {userskill}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4>Added Skills : </h4>

                  {editUserInput.skill.map((item) => (
                    <span key={item} className="btn btn-primary me-3 mb-2">
                      {item}{" "}
                      <button
                        onClick={() => removeSkill(item)}
                        className="text-light btn"
                      >
                        X
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h1>Professional Summary</h1>
              <div className="row p-3">
                <TextField
                  value={editUserInput.summary}
                  onChange={(e) =>
                    setEditUserInput({ ...editUserInput, summary: e.target.value })
                  }
                  multiline
                  rows={5}
                  id="summary"
                  label="Write a short summary of yourself"
                  variant="standard"
                />
              </div>
            </div>
            <div className="d-flex gap-4 ">
              <Button
                onClick={updateResume}
                type="button"
                variant="outlined"
                color="primary"
              >
                EDIT
              </Button>
              <Button variant="contained" color="error">
                DELETE
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;
