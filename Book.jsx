import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    address: '',
    phoneNumber: '',
    memories: '',
    gender: '',
    favActor: false,
    school: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2>Profile Information</h2>
        <form>
          <div style={styles.inputGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Nickname:</label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Memories:</label>
            <textarea
              name="memories"
              value={formData.memories}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label>
              Favorite Actor:
              <input
                type="checkbox"
                name="favActor"
                checked={formData.favActor}
                onChange={handleChange}
              />
            </label>
          </div>

          <div style={styles.inputGroup}>
            <label>School:</label>
            <select
              name="school"
              value={formData.school}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="School A">School A</option>
              <option value="School B">School B</option>
              <option value="School C">School C</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: ' pink',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  inputGroup: {
    marginBottom: '5px',
  }
};

export default ProfileForm;
