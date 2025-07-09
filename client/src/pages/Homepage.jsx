import React, { useEffect, useRef, useState } from "react";
import api from "../utils/axiosInstance";
import {
  Hero,
  AcademicSection,
  Mission,
  News,
  Clubs,
  Events,
  Testimonials,
  Footer,
  CampusImages,
  AchievementsSection,
  Partners,
} from "../components";
import Research from "../components/research";
import Loading from "../components/Loading";

export default function Homepage() {
  const [heroData, setHeroData] = useState({});
  const [academicData, setAcademicData] = useState({});
  const [programs, setPrograms] = useState([]);
  const [missionData, setMissionData] = useState(null);
  const [researchData, setResearchData] = useState(null);
  const [achievementData, setAchievementData] = useState(null);
  const [counterData, setCounterData] = useState({});
  const [newsData, setNewsData] = useState(null);
  const [clubsData, setClubsData] = useState(null);
  const [eventsData, setEventsData] = useState(null);

  const missionRef = useRef(null);
  const researchRef = useRef(null);
  const achievementRef = useRef(null);
  const newsRef = useRef(null);
  const clubsRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [heroResponse, academicResponse, programsResponse] =
          await Promise.all([
            api.get("/page/getSectionsActiveSet/home/hero"),
            api.get("/page/getSectionsActiveSet/home/academic"),
            api.get("/academic-program/degrees"),
          ]);

        setHeroData(heroResponse.data?.data || {});
        setAcademicData(academicResponse.data?.data || {});
        setPrograms(programsResponse.data?.data || []);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const lazyLoadSections = () => {
      try {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.id;

                if (id === "mission" && !missionData) {
                  api.get(`/page/getSectionsActiveSet/home/mission`).then((res) => {
                    setMissionData(res.data?.data || {});
                  });
                  api.get(`/page/getSectionsActiveSet/home/counter`).then((res) => {
                    setCounterData(res.data?.data || {});
                  });
                }

                if (id === "research" && !researchData) {
                  api.get(`/page/getSectionsActiveSet/home/research`).then((res) => {
                    setResearchData(res.data?.data || {});
                  });
                }

                if (id === "achievement" && !achievementData) {
                  api.get(`/page/getSectionsActiveSet/home/achievement`).then((res) => {
                    setAchievementData(res.data?.data || {});
                  });
                }

                if (id === "news" && !newsData) {
                  api.get(`/page/getSectionsActiveSet/home/news`).then((res) => {
                    setNewsData(res.data?.data || {});
                  });
                }

                if (id === "clubs" && !clubsData) {
                  api.get(`/page/getSectionsActiveSet/home/clubs`).then((res) => {
                    setClubsData(res.data?.data || {});
                  });
                }

                if (id === "events" && !eventsData) {
                  api.get(`/page/getSectionsActiveSet/home/events`).then((res) => {
                    setEventsData(res.data?.data || {});
                  });
                }
              }
            });
          },
          { threshold: 0.3 }
        );

        // Observe sections
        if (missionRef.current) observer.observe(missionRef.current);
        if (researchRef.current) observer.observe(researchRef.current);
        if (achievementRef.current) observer.observe(achievementRef.current);
        if (newsRef.current) observer.observe(newsRef.current);
        if (clubsRef.current) observer.observe(clubsRef.current);
        if (eventsRef.current) observer.observe(eventsRef.current);

        return () => observer.disconnect();
      } catch (error) {
        console.error("Lazy loading observer error:", error);
      }
    };

    lazyLoadSections();
  }, [missionData, researchData, achievementData, newsData, clubsData, eventsData]);

  return (
    <>
      <Hero data={heroData} />
      <AcademicSection data={academicData} programs={programs} />

      <div id="mission" ref={missionRef}>
        {missionData ? (
          <Mission data={missionData} counterData={counterData} />
        ) : (
          <Loading />
        )}
      </div>

      <div id="research" ref={researchRef}>
        {researchData ? <Research data={researchData} /> : <Loading />}
      </div>

      <div id="achievement" ref={achievementRef}>
        {achievementData ? (
          <AchievementsSection data={achievementData} counterData={counterData} />
        ) : (
          <Loading />
        )}
      </div>

      <div id="news" ref={newsRef}>
        {newsData ? <News /> : <Loading />}
      </div>

      <div id="clubs" ref={clubsRef}>
        {clubsData ? <Clubs /> : <Loading />}
      </div>

      <div id="events" ref={eventsRef}>
        {eventsData ? <Events /> : <Loading />}
      </div>

      <Events />
      <CampusImages />
      <Partners />
      <Testimonials />
      <Footer />
    </>
  );
}
