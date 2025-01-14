import React from 'react';
import Typography from '../components/Typography';
import { SharedButton } from '../components/SharedButton';
import { useNavigate } from 'react-router';
import { FaCheckCircle } from 'react-icons/fa'; // Import icons for highlights

const Strategy = () => {
  const navigate = useNavigate();
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };

  return (
    <>
    <div className="bg-gradient--pale-ocean">
    <div className="container my-5">
      {/* Title */}
      <Typography variant="h2" className="fs-1 fw-bold text-center mb-3">
        One-On-One Call: <span className='text-dark-primary fs-1'>7-Session Strategy </span>for Cricketers' Mental Strength
      </Typography>

      {/* Key Topics Section */}
      <div className="mb-5">
        <Typography variant="h2" className="fw-bold text-center mb-4">
          Key Topics Covered:
        </Typography>
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  Understanding the world of today’s kids and how it differs from ours.
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  Understanding Sporting Success and attributes thereof.
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  What is Psychological Build-up? The basic Psychological Build-up process?
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  What is mental toughness &amp; what role it plays in overall sporting success?
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  How we as parents contribute to mental weakness of our child?
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  Concept of Self Image &amp; Self Belief.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  Nuances of Parental Communication: Verbal &amp; Nonverbal.
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  Key words that kill/build confidence of anyone.
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  Key nonverbals that are detrimental for confidence of a sporting child.
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  What should I do about it as a parent?
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  The parent-coach relationship: An important factor for the child.
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-primary me-3" size={20} />
                <span className="fw-semibold bg-light px-3 py-2 rounded">
                  Helping the child accept, embrace &amp; correct non-performances.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center">
        <SharedButton
          variant="primary"
          size="lg"
          className="btn-primary fw-bold px-4 py-3 rounded-pill shadow hover-scale mb-3"
          label="Book Your One-On-One Call"
          onClick={handleNavigateToContactUs}
        />
      </div>
    </div>
    </div>
    </>
  );
};

export default Strategy;
