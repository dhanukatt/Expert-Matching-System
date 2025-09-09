import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { setPageTitle } from '../../store/themeConfigSlice';
import Swal from 'sweetalert2';
import axios from 'axios';
import PaymentsUser from './PaymentsUser';

const AITools = () => {
    const showAlert = async (type: number) => {
        if (type === 4) {
            Swal.fire({
                icon: 'warning',
                title: 'Purchase a package to get access!',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        }
    };

    const [access, setAccess] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                await axios
                    .get('http://localhost:8070/payment/checkUserPayment', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((response) => {
                        setAccess(response.data.accessGranted);
                        setLoaded(true);
                    })
                    .catch((error) => {
                        setAccess(false);
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'error',
                            title: error.response?.data?.error || 'Error fetching payment status',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                        });
                    });
            } catch (error) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: error.response?.data?.error || 'Error fetching payment status',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        };

        fetchPayments();

        if (!access && loaded) {
            showAlert(4);
        }
    }, [token]);

    return (
        <div className="container mx-auto px-4">
            {access === true ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    <div
                        className="group bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-xl border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none transition-all duration-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
                        style={{
                            transitionDelay: '500ms',
                        }}
                    >
                        <div className="py-7 px-6">
                            <div className="-mt-7 mb-7 -mx-6 rounded-tl-xl rounded-tr-xl h-[300px] overflow-hidden">
                                {/* Image with hover transition */}
                                <img src="/assets/images/ai1.jpg" alt="cover" className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110" />
                            </div>
                            <h5 className="text-[#3b3f5c] text-xl font-bold mb-4 dark:text-white-light group-hover:text-white transition-colors duration-700">Credit Score Classification</h5>
                            <p className="text-white-dark group-hover:text-gray-200 transition-colors duration-700">
                            Get insights into your creditworthiness by analyzing your financial history, guiding you towards better financial decisions.
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary mt-6 group-hover:bg-white group-hover:text-black transition-colors duration-700 ml-auto"
                                onClick={() => window.open('https://u-connect-credit-score-classification.streamlit.app/', '_blank')}
                            >
                                Explore More
                            </button>
                        </div>
                    </div>
                    
                    <div
                        className="group bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-xl border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none transition-all duration-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
                        style={{
                            transitionDelay: '500ms',
                        }}
                    >
                        <div className="py-7 px-6">
                            <div className="-mt-7 mb-7 -mx-6 rounded-tl-xl rounded-tr-xl h-[300px] overflow-hidden">
                                {/* Image with hover transition */}
                                <img src="/assets/images/ai3.jpg" alt="cover" className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110" />
                            </div>
                            <h5 className="text-[#3b3f5c] text-xl font-bold mb-4 dark:text-white-light group-hover:text-white transition-colors duration-700"> Relationship Conflict Resolution Suggestion </h5>
                            <p className="text-white-dark group-hover:text-gray-200 transition-colors duration-700">
                            Find effective ways to resolve conflicts by learning from real-life situations, ensuring peaceful and productive outcomes in your relationships.
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary mt-6 group-hover:bg-white group-hover:text-black transition-colors duration-700 ml-auto"
                                onClick={() => window.open('https://u-connect-relationship-conflict-resolution-suggestion.streamlit.app/', '_blank')}
                            >
                                Explore More
                            </button>
                        </div>
                    </div>
                    <div
                        className="group bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-xl border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none transition-all duration-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
                        style={{
                            transitionDelay: '500ms',
                        }}
                    >
                        <div className="py-7 px-6">
                            <div className="-mt-7 mb-7 -mx-6 rounded-tl-xl rounded-tr-xl h-[300px] overflow-hidden">
                                {/* Image with hover transition */}
                                <img src="/assets/images/ai4.jpg" alt="cover" className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110" />
                            </div>
                            <h5 className="text-[#3b3f5c] text-xl font-bold mb-4 dark:text-white-light group-hover:text-white transition-colors duration-700">Calorie Burn Predictor</h5>
                            <p className="text-white-dark group-hover:text-gray-200 transition-colors duration-700">
                            Accurately predict how many calories you’ll burn during different activities, helping you stay on top of your fitness goals.
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary mt-6 group-hover:bg-white group-hover:text-black transition-colors duration-700 ml-auto"
                                onClick={() => window.open('https://u-connect-calorie-burn-predictor.streamlit.app/', '_blank')}
                            >
                                Explore More
                            </button>
                        </div>
                    </div>
                    <div
                        className="group bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded-xl border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none transition-all duration-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
                        style={{
                            transitionDelay: '500ms',
                        }}
                    >
                        <div className="py-7 px-6">
                            <div className="-mt-7 mb-7 -mx-6 rounded-tl-xl rounded-tr-xl h-[300px] overflow-hidden">
                                {/* Image with hover transition */}
                                <img src="/assets/images/ai5.jpg" alt="cover" className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110" />
                            </div>
                            <h5 className="text-[#3b3f5c] text-xl font-bold mb-4 dark:text-white-light group-hover:text-white transition-colors duration-700">Student Mental Health Prediction</h5>
                            <p className="text-white-dark group-hover:text-gray-200 transition-colors duration-700">
                            Identify early signs of mental health issues with data-driven predictions, supporting students in maintaining their well-being.
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary mt-6 group-hover:bg-white group-hover:text-black transition-colors duration-700 ml-auto"
                                onClick={() => window.open('https://u-connect-student-mental-health-prediction.streamlit.app/', '_blank')}
                            >
                                Explore More
                            </button>
                        </div>
                    </div>
                   
                </div>
            ) : (
                <PaymentsUser />
            )}
        </div>
    );
};

export default AITools;
