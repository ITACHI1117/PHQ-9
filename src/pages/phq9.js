import React from "react";

function Phq9() {
  return (
    <>
      <div className="">
        <h1>PHQ-9 Patient Depression Questionnaire </h1>
        <h2>For initial diagnosis: </h2>
        <ul>
          <li>Patient completes PHQ-9 Quick Depression Assessment</li>
          <li>
            If there are at least 4 3s in the shaded section (including
            Questions #1 and #2), consider a depressive disorder. Add score to
            determine severity.
          </li>
        </ul>
        <br />
        <h2>Consider Major Depressive Disorder</h2>
        <p>
          - if there are at least 5 3s in the shaded section (one of which
          corresponds to Question #1 or #2){" "}
        </p>
        <br />
        <h2>Consider Other Depressive Disorder</h2>
        <p>
          - if there are 2-4 3s in the shaded section (one of which corresponds
          to Question #1 or #2)
        </p>
        <br />
        <p>
          <span>Note:</span>Since the questionnaire relies on patient
          self-report, all responses should be verified by the clinician, and a
          definitive diagnosis is made on clinical grounds taking into account
          how well the patient understood the questionnaire, as well as other
          relevant information from the patient. Diagnoses of Major Depressive
          Disorder or Other Depressive Disorder also require impairment of
          social, occupational, or other important areas of functioning
          (Question #10) and ruling out normal bereavement, a history of a Manic
          Episode (Bipolar Disorder), and a physical disorder, medication, or
          other drug as the biological cause of the depressive symptoms.{" "}
        </p>
        <br />
        <h2>
          To monitor severity over time for newly diagnosed patients or patients
          in current treatment for depression:
        </h2>
        <ul>
          <li>
            Patients may complete questionnaires at baseline and at regular
            intervals (eg, every 2 weeks) at home and bring them in at their
            next appointment for scoring or they may complete the questionnaire
            during each scheduled appointment.{" "}
          </li>
          <li>
            Add up 3s by column. For every 3: Several days = 1 More than half
            the days = 2 Nearly every day = 3
          </li>
          <li>Add together column scores to get a TOTAL score. </li>
          <li>
            Refer to the accompanying PHQ-9 Scoring Box to interpret the TOTAL
            score.{" "}
          </li>
          <li>
            {" "}
            Results may be included in patient files to assist you in setting up
            a treatment goal, determining degree of response, as well as guiding
            treatment intervention.
          </li>
          <br />
          <h2>Scoring: add up all checked boxes on PHQ-9 </h2>
          <p>
            For every 3 Not at all = 0; Several days = 1; More than half the
            days = 2; Nearly every day = 3{" "}
          </p>
        </ul>
        <br />
        <h2>Interpretation of Total Score</h2>
      </div>
    </>
  );
}

export default Phq9;
