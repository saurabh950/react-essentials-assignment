import React from "react";
import styles from './ProfileCard.module.css';

const ProfileCard = () => {
    return(
        <div className={styles.profileCard}>
            <div className={styles.cardHeader}>
                <div className={styles.profileImage}>
                    <img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=" alt="Profile"/>
                </div>
            </div>
            <div className={styles.cardBody}>
                <h2 className={styles.name}>Alex Jhonson</h2>
                <p className={styles.title}>Frontend Developer</p>
            

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>1.2k</span>
                        <span className={styles.statLabel}>Followers</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>892</span>
                        <span className={styles.statLabel}>Following</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>147</span>
                        <span className={styles.statLabel}>Projects</span>
                    </div>
                </div>

                <p className={styles.bio}>Passionate about creating beautiful, user-friendly web experiences. Love working with React, Typescript and mordern web Technologies.</p>

                <div className={styles.actions}>
                    <button className={styles.primaryButton}>Follow</button>
                    <button className={styles.secondaryButton}>Message</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;